import { useState } from 'react';

function SearchBar(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
    props.handleChangeCheckbox(event.target.checked);
  };
  return (
    <div>
      <p>
        {' '}
        <b> Search Name</b>
      </p>
      <input
        onChange={(event) => {
          props.handleChangeSearchBar(event.target.value);
        }}
        placeholder="Search..."
      />
      <br />
      <input
        type="checkbox"
        onChange={handleCheckbox}
        checked={isChecked}
        style={{ marginTop: '20px' }}
      />
      <label>Only show product in stock</label>
    </div>
  );
}

export default SearchBar;
