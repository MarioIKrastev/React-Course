import useInput from "../hooks/useInput";
// import useInput from "../hooks/useInputWithReducer";

const BasicForm = (props) => {
  const {
    value: validateFirstName,
    isValid: firstNameIsValid,
    hasError: isFirstNameWithError,
    valueHandler: isFirstNameChanged,
    inputBluerHandler: isFirstNameTouched,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: validateLastName,
    isValid: lastNameIsValid,
    hasError: isLastNameWithError,
    valueHandler: isLastNameChanged,
    inputBluerHandler: isLastNameTouched,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: validateEmail,
    isValid: emailIsValid,
    hasError: isEmailWithError,
    valueHandler: isEmailChanged,
    inputBluerHandler: isEmailTouched,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!emailIsValid) {
      return;
    }
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClass = isFirstNameWithError
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = isLastNameWithError
    ? "form-control invalid"
    : "form-control";
  const emailClass = isEmailWithError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={isFirstNameChanged}
            onBlur={isFirstNameTouched}
            value={validateFirstName}
          />
          {isFirstNameWithError && (
            <p className="error-text">Enter your first name.</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={isLastNameChanged}
            onBlur={isLastNameTouched}
            value={validateLastName}
          />
          {isLastNameWithError && (
            <p className="error-text">Enter your last name.</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={isEmailChanged}
          onBlur={isEmailTouched}
          value={validateEmail}
        />
        {isEmailWithError && (
          <p className="error-text">Enter your email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
