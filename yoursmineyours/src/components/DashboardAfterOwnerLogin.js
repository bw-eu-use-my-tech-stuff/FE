import React from "react";

function DashboardAfterOwnerLogin(props) {
    
    const goToAddItem = (event) => {
      event.preventDefault();
      props.history.push('/addItem');
    }

    
  return (
    <div>
      <button onClick={goToAddItem}>Add Item</button>
      <button>Delete Item</button>
    </div>
  );
}

export default DashboardAfterOwnerLogin;
