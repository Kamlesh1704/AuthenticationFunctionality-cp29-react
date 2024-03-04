import Cookies from 'js-cookie'
const Login = props => {
  const onLogin = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const userData = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
