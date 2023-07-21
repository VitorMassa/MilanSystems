import React from "react";
import { Input, Label, Select, Title } from "./styles";

export default function RegisterBill() {
  return (
    <div className="border-2 border-cyan-200">
      <form className="">
        <div className="grid justify-items-center border-2 border-red-800">
          <Title>Cadastrar Conta</Title>
        </div>
        <div className="border-2 border-blue-600">
          <div className="grid grid-cols-12 gap-4 max-sm:grid-cols-1">
            <div className="flex col-span-5">
              <Label className="">Nome: </Label>
              <Input />
              {/* w-5/6 max-md:w-4/6 */
              /* w-1/6 max-md:w-2/6 */}
            </div>
            <div className="flex col-span-5">
              <Label className="">Procedimento:</Label>
              <Input />
              {/* w-2/6 max-xl:w-2/6 max-md:w-2/6 */
              /* w-4/6 max-xl:w-4/6 max-md:w-4/6 */}
            </div>
          </div>
          <div className="grid grid-cols-12 mt-4 gap-1 max-sm:grid-cols-2">
            <div className="flex col-span-2 max-sm:col-span-1">
              <Label className="w-2/6 max-md:w-3/6">Valor: </Label>
              <Input className=" w-4/6 max-md:w-3/6" />
            </div>
            <div className="flex col-span-2 max-sm:col-span-1 max-md:col-span-3">
              <Label className="w-2/6 max-md:w-3/6 max-sm:w-2/6">
                Parcela:
              </Label>
              <Select
                name="cars"
                id="cars"
                className="border-1 w-4/6 max-md:w-3/6 mx-sm:w-4/6"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </Select>
            </div>
            <div className="flex col-span-2 max-sm:col-span-1">
              <Label className="w-2/6 max-md:w-2/6">Data: </Label>
              <Input className="w-4/6 max-md:w-4/6" type="date" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
