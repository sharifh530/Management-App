import React from 'react'
import { useEffect } from 'react'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { backendUrl } from '../../../config'

const Member = ({ id, member, deleteMember, editMember }) => {
  return (
    <div className="bg-white relative shadow-sm rounded-md overflow-hidden text-center">
      <div className="px-4 py-8">
        {/* edit/delete buttons  */}
        <div className="absolute right-5 top-5">
          <div className="w-full flex space-x-3 items-center">
            <div onClick={() => editMember(id)}>
              <FontAwesomeIcon
                className="text-gray-600 hover:text-lemon transition-all duration-200 cursor-pointer"
                icon={faEdit}
              />
            </div>
            <div onClick={() => deleteMember(id)}>
              <FontAwesomeIcon
                className="text-gray-600 hover:text-lemon transition-all duration-200 cursor-pointer"
                icon={faTrash}
              />
            </div>
          </div>
        </div>
        {/* edit/delete buttons  */}
        {/* profile image  */}
        <div className="">
          <img
            className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-lemon"
            src={`${backendUrl}/${member?.photo}`}
            alt=""
          />
        </div>
        {/* profile image  */}
        {/* member name  */}
        <div className="mt-3">
          <h1 className="font-bold text-xl text-gray-700">
            {member?.first_name}
          </h1>
        </div>
        {/* member name  */}
        {/* member info  */}
        <div className="mt-4">
          <div>
            <h1 className="text-gray-600 font-medium">
              <span className="text-lemon">Email:</span> {member?.email}
            </h1>
          </div>
          <div>
            <h1 className="text-gray-600 font-medium">
              <span className="text-lemon">Phone:</span> {member?.phone}
            </h1>
          </div>
          <div>
            <h1 className="text-gray-600 font-medium">
              <span className="text-lemon">Club Member:</span>{' '}
              {member?.clubMember ? 'True' : 'False'}
            </h1>
          </div>
        </div>
        {/* member info  */}
      </div>
    </div>
  )
}

export default Member
