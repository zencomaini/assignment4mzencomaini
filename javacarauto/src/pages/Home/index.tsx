import React from "react";
import "../../assets/style/style.css";
import { CHeader, CFooter } from "../../components";

const index: React.FC = () => {
  return (
    <>
    <CHeader/>
    <div className="fixed top-24">
      <div className="fixed flex items-end justify-end right-12 top-16 md:top-44">
        <button>Login</button>
      </div>
      <div className="fixed items-center md:top-52 md:px-2 md:justify-center">
        <table className="">
          <thead className="bg-slate-500 items-center border-b-2">
            <tr className="text-xs md:text-xs xl:text-base">
              <th className="md:px-5 xl:px-12">no</th>
              <th className="md:px-5 xl:px-12">company</th>
              <th className="md:px-5 xl:px-12">brand</th>
              <th className="md:px-5 xl:px-12">model</th>
              <th className="md:px-5 xl:px-12">type</th>
              <th className="md:px-5 xl:px-12">stock</th>
              <th className="md:px-5 xl:px-12">made in</th>
              <th className="md:px-5 xl:px-12">price</th>
              <th className="md:px-5 xl:px-12"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 text-gray-900 border-b text-center text-xs">
              <td className="whitespace-nowrap ">1</td>
              <td className=" font-light whitespace-nowrap">toyota</td>
              <td className=" font-light whitespace-nowrap">avanza</td>
              <td className=" font-light whitespace-nowrap">antena</td>
              <td className=" font-light whitespace-nowrap">shark fin</td>
              <td className=" font-light whitespace-nowrap">1234</td>
              <td className=" font-light whitespace-nowrap">German</td>
              <td className=" font-light whitespace-nowrap">Rp. 123.456.00</td>
              <td className=" font-light whitespace-nowrap">
                <button>edit</button> <br />
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <CFooter/>
    </>
  );
};

export default index