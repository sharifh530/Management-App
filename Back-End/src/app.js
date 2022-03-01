const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const MemberController = require('./MemberController')

const profilImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
})
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const uploadProfile = multer({
  storage: profilImage,
  fileFilter: fileFilter,
}).single('photo')

const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  '/src/public/images',
  express.static(path.join(__dirname, 'public/images'))
)

app.get('/members', MemberController.memberList)
app.get('/members/:id', MemberController.memberById)
app.post('/member-create', uploadProfile, MemberController.memberSave)
app.post('/member-update/:id', uploadProfile, MemberController.memberUpdate)
app.get('/members/delete/:id', MemberController.memberDelete)

module.exports = app
