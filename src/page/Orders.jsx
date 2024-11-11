import Order from "../components/orders/Order";
import MainCover from "../components/MainCover";
import OrderForm from "../components/orders/OrderForm";

function Orders() {
  return (
    <>
      <MainCover title="Orders" form={OrderForm}>
        <Order></Order>
      </MainCover>
    </>
  );
}

export default Orders;
