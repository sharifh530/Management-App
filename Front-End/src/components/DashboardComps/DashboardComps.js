import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { memberDelete, memberList } from '../../api'
import AddMember from '../../pages/DashboardPage/AddMember'
import { getMember, editMember } from '../../redux/member/MemberAction'
import { Redirect } from 'react-router-dom'
import Member from './Member/Member'
import swal from 'sweetalert'

const DashboardComps = (props) => {
  const [members, setMembers] = useState([])
  const [edit, setEdit] = useState(false)
  const [editItem, setEditItem] = useState()
  useEffect(() => {
    axios.get(memberList).then((res) => {
      props.getMember(res.data)
      setMembers(res.data)
    })
  }, [props.member])

  const deleteMember = (e) => {
    swal({
      title: 'Are you sure?',
      text: 'Removing member!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        confirmDelete(e)
      }
    })
  }

  const confirmDelete = (id) => {
    axios.get(`${memberDelete}${id}`).then((res) => {
      axios.get(memberList).then((res) => {
        props.getMember(res.data)
        setMembers(res.data)
      })
    })
    swal('Member has been removed!', {
      icon: 'success',
    })
  }

  const editMember = (e) => {
    setEdit(true)
    console.log(e)
    setEditItem(e)
    props.editMember(e)
  }

  return (
    <>
      {edit ? (
        <Redirect to="/dashboard/edit-member/" />
      ) : (
        <div className="px-4 py-6 bg-gray-50 h-screen">
          <div>
            <h1 className="font-bold text-3xl">All Members</h1>
          </div>
          <div className="mt-10 w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {members?.map((member) => (
              <Member
                key={member?.id}
                member={member}
                id={member?.id}
                deleteMember={deleteMember}
                editMember={editMember}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    members: state.members,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    editMember: (member) => dispatch(editMember(member)),
    getMember: (member) => dispatch(getMember(member)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComps)
