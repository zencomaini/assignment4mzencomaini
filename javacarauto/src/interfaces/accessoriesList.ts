interface AccessoriesList {
  _id: object ,
  company_acc: string,
  brand_acc: string,
  name_acc: string,
  type_acc: string,
  stock_acc: number,
  madein_acc: string,
  color_acc: string, 
  price_acc: number,
  isDone: false,
  setAcccessories?: React.Dispatch<React.SetStateAction<string>>,
  onSubmit?: any
}

export type {AccessoriesList}