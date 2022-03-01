import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMember, getMember } from '../../../redux/member/MemberAction'
import { memberCreate } from '../../../api'
import { memberList } from '../../../api'
import swal from 'sweetalert'
import axios from 'axios'

const AddMemberForm = (props) => {
  const [first_name, setFirst_name] = useState()
  const [last_name, setLast_name] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address1, setAddress1] = useState()
  const [address2, setAddress2] = useState()
  const [clubMember, setClubMember] = useState()
  const [image, setImage] = useState()

  const handleAddMember = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('address1', address1)
    formData.append('address2', address2)
    formData.append('clubMember', clubMember)
    formData.append('photo', image)

    axios.post(memberCreate, formData).then((res) => {
      if (res.data.success) {
        swal('Member Added!', res.data.message, 'success')
        addMember(res.data)
      } else {
        swal('Error!', res.data.message, 'error')
      }
    })

    axios.get(memberList).then((res) => {
      props.getMember(res.data)
    })
  }
  return (
    <div className="bg-white shadow-sm max-w-3xl mx-auto rounded-md">
      <div className="px-4 py-8">
        <form
          onSubmit={handleAddMember}
          action="#"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="w-full flex items-center space-x-4 mb-4">
            <div className="w-full">
              <input
                name="first_name"
                required
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="w-full">
              <input
                name="last_name"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                placeholder="Last Name"
                type="text"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="w-full">
              <input
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                placeholder="Email"
                type="email"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="w-full">
              <input
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                placeholder="Phone"
                type="text"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="w-full">
              <input
                name="address1"
                required
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                placeholder="Address 1"
                type="text"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="w-full">
              <input
                name="address2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                placeholder="Address 2"
                type="text"
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="w-full">
              <select
                name="clubMember"
                required
                value={clubMember}
                onChange={(e) => setClubMember(e.target.value)}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                id=""
              >
                <option value="">Club Member</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>
          <div className="w-full mb-4">
            <div className="w-full border border-gray-200 rounded-md">
              <input
                name="memberImg"
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <input
                type="submit"
                value={`Add Member`}
                className="bg-lemon px-6 py-3 text-white font-medium rounded-md transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              />
            </div>
            {/* {this.props.message && this.props.message} */}
          </div>
        </form>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    members: state.members,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMember: (member) => dispatch(getMember(member)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMemberForm)
