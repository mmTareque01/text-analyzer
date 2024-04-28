import { Order, Paginate, Select } from "../../../../config/interface/Base.interface"

interface ListText extends Select, Paginate, Order{
    clue:{id:string}
}


export const listTextRepositories = (data:ListText) => {
    console.log(data)
    return [{name:'tarek', age: 20}]
}

