import React from 'react';
import axios from 'axios';
import {Accessories} from '../../interfaces/accessories';
import { useState } from 'react';
import "../../assets/style/style.css";
import { CHeader, CFooter } from "../../components";

const Index = () => {
  const [company, setCompany] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [stock, setStock] = useState<number>(0);
  const [madein, setMadein] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [accessories, setAccessories] = useState<Accessories[]>([])

  // const [task, setTask] = useState<string>('')
  // const [taskList, setTaskList] = useState<ITask[]>([])
  // const inputAccessories = () => {
  //   let data = {
  //     company_acc: 'Toyota',
  //     brand_acc: 'Avanza',
  //     name_acc: 'Shark Antena',
  //     type_acc: 'SF123',
  //     stock_acc: '100',
  //     madein_acc: 'Indonesia',
  //     color_acc: 'Black',
  //     price_acc: '100000'
  //   }

    // axios.post("http://localhost:3000/inputAccessories", accessories)
    // .then((response) => {
    //   console.log(response);
    // });

    const handleAccessories = async () => {
      const newAccessories: Accessories = { 
        _id: Date.now(), 
        company_acc: company, 
        brand_acc: brand, 
        name_acc: name, 
        type_acc: type, 
        stock_acc: stock, 
        madein_acc: madein, 
        color_acc: color, 
        price_acc: price, 
        isDone: false,
      };
      setAccessories([...accessories, newAccessories]);
      setCompany("");
      setBrand("");
      setName("");
      setType("");
      setStock(0);
      setMadein("");
      setColor("");
      setPrice(0);
      // await console.log(accessories);

    };
  
  return (
    <>
    <CHeader/>
    <div className="fixed top-28 w-full md:top-44">
      <div className="flex items-center justify-between px-3">
        <h6>admin name</h6>
        <h6>Logout</h6>
      </div>
      {/* <div className="fixed flex items-center justify-between left-20">
        <h6>admin name</h6>
        <button className="">Logout</button>
        <nav className="md:fixed md:flex right-20 top-44">
          <ul>
            add product
            <li><a href="#">accessories</a></li>
            <li><a href="#">car tires</a></li>
            <li><a href="#">car vekg</a></li>
          </ul>
        </nav>
      </div> */}
      {/* <div className="">
        <h5>add accessories</h5>
      </div>
      <div className="">
        <p>by admin</p>
      </div> */}
      <div className="fixed flex justify-between items-center md:space-x-40 xl:left-[20%]">
        <form className="w-32 h-70 space-x-20" onSubmit={(e) => {e.preventDefault()}} >
          <br />
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">company</label>
          <input type="input" className="text-black h-5" value={company} onChange={(e) => {setCompany(e.target.value)}}/>
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">brand</label>
          <input type="text" className='text-black h-5' value={brand} onChange={(e) => {setBrand(e.target.value)}}/> 
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">accessories name</label>
          <input type="text" className="text-black h-5" value={name} onChange={(e) => {setName(e.target.value)}}/> 
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">type</label>
          <input type="text" className="text-black h-5" value={type} onChange={(e) => {setType(e.target.value)}}/>
        </form>
        <form className="absolute top-52 w-full h-70 space-x-20 items-center md:top-0 md:px-32" onSubmit={(e) => {e.preventDefault()}}>
          <br />
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">stock</label>
          <input type="number" className='text-black h-5' value={ stock} onChange={(e) => {setStock(e.target.valueAsNumber)}}/>
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">made in</label>
          <input type="text" className='text-black h-5' value={ madein} onChange={(e) => {setMadein(e.target.value)}}/>
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">color</label>
          <input type="text" className='text-black h-5' value={ color} onChange={(e) => {setColor(e.target.value)}}/>
          <label htmlFor="" className="flex mt-4 text-[8px] xl:text-base">price</label>
          <input type="number" className='text-black h-5' value={ price} onChange={(e) => {setPrice(e.target.valueAsNumber)}}/>
        </form>
        <div className="fixed flex justify-end items-baseline top-[80%] right-[31%] md:top-[75%]">
            <button onClick={handleAccessories} type="submit" className="mt-4 bg-slate-600 text-red-300 py-2 px-6 rounded-md hover:bg-slate-400">Submit</button>
        </div>
      </div>
      <CFooter/>
    </div> 
    </>
  );
};

export default Index