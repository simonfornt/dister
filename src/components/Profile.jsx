import React from 'react'

function Profile() {
  return (
    <div className='flex justify-center items-center gap-3'>
       <div> <img src="img/bell.png" alt="" /></div>
        <div className='flex justify-center items-center gap-4'>
            <div><img className='' src="img/profile.png" alt="" /></div>
            <div>
                <h3 className='text-secondary font-ones font-semibold text-lg'>Usman Zafar</h3>
                <p className='text-secondary font-ones'>usmanzafar@gamil.com</p>
            </div>
        </div>
    </div>
  )
}

export default Profile;