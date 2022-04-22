export default {
    methods: {
        validateEmail(email) {
            if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return false
            } else {
                return true
            }
        },
        validatePassword(password) {
            if (password.length < 8) {
                return false
            } else {
                return true
            }
        },
        validatePhone(phone) {
            if (phone == '') {
                return false
            } else if (/\d/.test(phone) === false) {
                return false
            }

            if (phone.length > 14 || phone.length < 6) {
                return false
            }
            return true
        },
        validateRequiredField(field) {
            if (field == null || field == '') {
                return false
            } else {
                return true
            }
        },
        validateConfirmPass(pass, cPass) {
            if (pass === cPass) {
                return true
            } else {
                return false
            }
        },
        scrollToTop() {
            window.scrollTo(25, 25)
        },

        checkFileExt(file, ext = ['jpg', 'png']) {
            if (!Array.isArray(ext)) {
                return false
            }

            let parseExt = ext.toString().replaceAll(',', '|')
            var re = new RegExp(`(.*?).(${parseExt})$`)
            if (!file.length) {
                if (!re.test(file.name)) {
                    return false
                }
                return true
            } else {
                for (let index = 0; index < file.length; index++) {
                    
                    if (!re.test(file[index].name)) {
                        return false
                    }
                }
                return true
            }
        },

        getFileExt(filename) {
            return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : false
        },

        keepFilesArrays(fileList){
            let namesArrays = []
            for (let index = 0; index < fileList.length; index++) {
                namesArrays.push(fileList[index].name)
            }
            return namesArrays;
        },

        validatePrice(price){
            var re = /^\d+(?:[.,]\d+)*$/gm;
            if(parseFloat(price) == NaN) return false
            if (re.test(price) == false) {
                return false
            }else{
                return true
            }
        }
    }
}
