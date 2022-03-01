const db = require('./database')
exports.memberList = async (req, res) => {
  await db.execute(`SELECT * FROM members`, function (err, results, fields) {
    res.send(results)
  })
}

exports.memberById = async (req, res, next) => {
  let id = req.params.id
  await db.execute(
    `SELECT * FROM members WHERE id=${id}`,
    function (err, results, fields) {
      res.send(results)
    }
  )
}

exports.memberSave = async (req, res, next) => {
  const {
    first_name,
    last_name,
    clubMember,
    email,
    phone,
    address1,
    address2,
  } = req.body
  const imagePath = req.file
  let photo
  if (imagePath) {
    photo = imagePath.path
  } else {
    photo = 'src/public/images/demo.png'
  }

  await db.execute(
    `INSERT INTO members (first_name, last_name,clubMember, email, phone, address1, address2, photo)
    VALUES ('${first_name}', '${last_name}','${clubMember}', '${email}', '${phone}', '${address1}', '${address2}', '${photo}');`,
    function (err, results, fields) {
      if (results) {
        res.send({
          success: true,
          message: 'Memeber addedd successfully',
        })
      } else {
        res.send({
          success: false,
          message: 'Could not add Member, Please check your connection',
        })
      }
      console.log(err)
    }
  )
}

exports.memberUpdate = async (req, res, next) => {
  console.log(req)
  let id = req.params.id
  const {
    first_name,
    last_name,
    clubMember,
    email,
    phone,
    address1,
    address2,
  } = req.body
  const imagePath = req.file
  let photo
  if (imagePath) {
    photo = imagePath.path
  } else {
    photo = 'src/public/images/demo.png'
  }
  await db.execute(
    `UPDATE members SET 
        first_name='${first_name}',
        last_name='${last_name}',
        clubMember='${clubMember}',
        email='${email}', 
        phone='${phone}', 
        address1='${address1}', 
        address2='${address2}', 
        photo='${photo}'
        WHERE id=${id};`,
    function (err, results, fields) {
      if (results) {
        res.send({
          success: true,
          message: 'Memeber updated successfully',
        })
      }
    }
  )
}

exports.memberDelete = async (req, res, next) => {
  let id = req.params.id
  await db.execute(
    `DELETE FROM members WHERE id=${id};`,
    function (err, results, fields) {
      if (results) {
        res.send({
          success: true,
          message: 'Memeber Deleted',
        })
      }
    }
  )
}
