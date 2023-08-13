export interface Payment {
  carId: number;
  customerId: number;
  rentDate: number;
  returnDate: number;

  fullName: string;
  cardNumber: string;
  cardBalance: number;
  validDate: string;
  cvv: number;
}
