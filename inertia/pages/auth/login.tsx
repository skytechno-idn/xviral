import { useForm } from '@inertiajs/react'
import { Button } from '@nextui-org/react'
import React from 'react'

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })
   function submit(e: any) {
    e.preventDefault()

    post('/auth/authenticated', {
      preserveScroll: true,
      onError: (errors) => {
       alert('ada Error')
      },

   
      onSuccess: () => {
        alert('berhasil')
      },
    })
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
        {errors.email && <div>{errors.email}</div>}
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>}

        <button type="submit" disabled={processing}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
