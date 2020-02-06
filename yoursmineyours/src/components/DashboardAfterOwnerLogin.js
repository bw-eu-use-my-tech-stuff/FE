import React from "react";

function DashboardAfterOwnerLogin(props) {
    
    const goToAddItem = (event) => {
      event.preventDefault();
      props.history.push('/addItem');
    }

    
  return (
    <div>
      <h1>Product Owner Dashboard</h1>
      <button onClick={goToAddItem}>Add Item</button>
      <button>Delete Item</button>
    </div>
  );
}

export default DashboardAfterOwnerLogin;
