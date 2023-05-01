import { authFunction, authRequest, getFunction, getRequest, postFunction, postRequest } from '../services/APIService';

export default function App() {

  function btnFunctionGetClick() {
    getFunction()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  function btnFunctionPostClick() {
    postFunction()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  function btnRequestGetClick() {
    getRequest()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  function btnRequestPostClick() {
    postRequest()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  function btnAuthRequestClick() {
    authRequest()
      .then(data => console.log(data))
      .catch(err => console.error(err));
    // authRequest()
    //   .then(data => console.log(data))
    //   .catch(err => {
    //     if (err.response.status === 401)
    //       window.location.href = "/login";
    //     else
    //       console.error(err);
    //   });
  }

  function btnAuthFunctionClick() {
    authFunction()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  return (
    <main>
      <div>
        <button onClick={btnFunctionGetClick}>Function GET</button>
      </div>
      <div>
        <button onClick={btnFunctionPostClick}>Function POST</button>
      </div>
      <div>
        <button onClick={btnRequestGetClick}>Request GET</button>
      </div>
      <div>
        <button onClick={btnRequestPostClick}>Request POST</button>
      </div>
      <div>
        <button onClick={btnAuthRequestClick}>Auth Request</button>
      </div>
      <div>
        <button onClick={btnAuthFunctionClick}>Auth Function</button>
      </div>
    </main>
  )
}
