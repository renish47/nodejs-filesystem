const fs = require('fs');

exports.createFile = (req, res, next) => {
    const date = new Date()
    const currentTimeStamp = date.toISOString()
    const fileName = `${currentTimeStamp.split("T")[0]}-${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s.txt`

    const filePath = "./filesFolder/" + fileName

    fs.writeFile(filePath, currentTimeStamp, error => {
        if (error)
            res.status(500).json({ message: `Error creating file` });
        else
            res.status(201).json({ message: `File ${fileName} created successfully` })
    })
}

exports.getFiles = (req, res, next) => {

    const dirPath = "./filesFolder"

    fs.readdir(dirPath, (err, files) => {
        if (err)
            res.status(500).json({ message: "Error Retriving files" })
        else {
            const fileArr = files.map(
                (file) => {
                    const fileContent = fs.readFileSync(dirPath + "/" + file)
                    return ({
                        fileName: file,
                        content: fileContent.toString()
                    })

                })
            res.status(200).json({
                message: "Files Retrived Successfully",
                files: fileArr
            })
        }
    })
}