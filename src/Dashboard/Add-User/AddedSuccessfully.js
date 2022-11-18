function AddedSuccessfully(props) {
  return (
    <div className="col col-sm col-md col-lg mt-4 px-4">
      <h5 className="ms-2">User Successfully added</h5>
      <hr />
      <h6 className="mt-4 ms-2">
        User successfully added with ID : {props.regId}
      </h6>
    </div>
  );
}

export default AddedSuccessfully;
