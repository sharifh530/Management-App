import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addMember, getMember } from '../../../redux/member/MemberAction'
import { memberById, memberUpdate, memberList } from '../../../api'
import swal from 'sweetalert'
import axios from 'axios'

const EditMemberForm = (props) => {
  const [member, setMember] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    clubMember: '',
  })
  const [memberImg, setMemberImg] = useState(null)
  const changeHandler = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value })
  }
  const imgChangeHandler = (e) => {
    setMemberImg({ [e.target.name]: e.target.files[0] })
  }
  useEffect(() => {
    axios.get(`${memberById}${props.editId}`).then((res) => {
      console.log(res)
      console.log(props.members)
      setMember({
        first_name: res.data[0].first_name,
        last_name: res.data[0].last_name,
        email: res.data[0].email,
        phone: res.data[0].phone,
        address1: res.data[0].address1,
        address2: res.data[0].address2,
        clubMember: res.data[0].clubMember,
      })
    })
  }, [])
  const handleAddMember = (e) => {
    e.preventDefault()
    setMember({ ...member, photo: memberImg })
    axios.post(`${memberUpdate}${props.editId}`, member).then((res) => {
      swal('Member Updated!', 'Member Updated to the list!', 'success')
      axios.get(memberList).then((res) => {
        props.getMember(res.data)
      })
    })
  }
  return (
    <div className="bg-white shadow-sm max-w-3xl mx-auto rounded-md">
      <div className="px-4 py-8">
        <form onSubmit={handleAddMember} action="#">
          <div className="w-full flex items-center space-x-4 mb-4">
            <div className="w-full">
              <input
                name="first_name"
                required
                value={member?.first_name}
                onChange={changeHandler}
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="w-full">
              <input
                name="last_name"
                value={member?.last_name}
                onChange={changeHandler}
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
                value={member?.email}
                onChange={changeHandler}
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
                value={member?.phone}
                onChange={changeHandler}
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
                value={member?.address1}
                onChange={changeHandler}
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
                value={member?.address2}
                onChange={changeHandler}
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
                value={member?.clubMember}
                onChange={changeHandler}
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
                onChange={imgChangeHandler}
                type="file"
                className="w-full border-gray-200 rounded-md py-3 px-4 focus:border-transparent focus:ring-lemon"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="">
              <input
                type="submit"
                value={`Update Member`}
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
    editId: state.editId,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMember: (member) => dispatch(getMember(member)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMemberForm)
