// connect API
const apiKey = "0820bc88c8b349cda9ce48082d5647a1";
const baseUrl = "https://crudcrud.com/api/";
const url = baseUrl + apiKey;

const endpointTask = `${url}/task`;
// const endpointMahasiswa = `${url}/mahasiswa`;
const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

const getTask = () => {
  fetch(endpointTask).then(handleSuccess).catch(handleError);
};

const addItem = (input) => {
  // list = task;
  fetch(endpointTask, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ...JSON.parse(localStorage.getItem("tasks") || "[]"),
      { tasks: input, checked: false },
    ]),
  });
};
