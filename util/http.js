import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-b4317-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
