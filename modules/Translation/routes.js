module.exports = [
    { "path": "/", "method": "get", "action": "getAll" },
    { "path": "/key", "method": "get", "action": "getTranslation" },
    { "path": "/key", "method": "post", "action": "createTranslation" }
]