import React from 'react';
import { CarTires } from '../../interfaces/cartires';
import axios from 'axios';
import { useState } from 'react';
import "../../assets/style/style.css";
import { CHeader, CFooter } from "../../components";

const Index = () => {
  const [company, setCompany] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [ring, setRing] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [stock, setStock] = useState<number>(0);
  const [madein, setMadein] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [cartires, setCarTires] = useState<CarTires[]>([])


  const handleCarTires = async () => {
    const newCarTires: CarTires = { 
      _id: Date.now(), 
      companyTires: company, 
      brandTires: brand, 
      ringTires: ring, 
      typeTires: type, 
      stockTires: stock, 
      madeinTires: madein, 
      colorTires: color, 
      priceTires: price, 
      isDone: false,
    };
    setCarTires([...cartires, newCarTires]);
    setCompany("");
    setBrand("");
    setRing(0);
    setType("");
    setStock(0);
    setMadein("");
    setColor("");
    setPrice(0);
    await console.log(cartires);

  };

  return (
    <>
    <CHeader/>
    <div className="md:fixed top-44 w-full">
      <div className="md:fixed md:flex items-center justify-between left-20">
        <p className="space-x-4">admin name <button className="">Logout</button>
        </p>
        <nav className="md:fixed md:flex right-20 top-44">
          <ul>
            add product
            <li><a href="#">accessories</a></li>
            <li><a href="#">car tires</a></li>
            <li><a href="#">car vekg</a></li>
          </ul>
        </nav>
      </div>
      <div className="md:flex justify-center items-center">
        <p>add car tires</p>
      </div>
      <div className="md:flex justify-center items-center">
        <p>by admin</p>
      </div>
      <div className="md:fixed flex justify-between items-center space-x-40 top-60 left-60">
        <form action="" className="w-full h-70 space-x-20" onSubmit={(e) => {e.preventDefault()}}>
          <br />
          <label htmlFor="" className="flex mt-4">company</label>
          <input type="text" value={company} onChange={(e) => {setCompany(e.target.value)}} />
          <label htmlFor="" className="flex mt-4">brand</label>
          <input type="text"value={brand} onChange={(e) => {setCompany(e.target.value)}} />
          <label htmlFor="" className="flex mt-4">accessories name</label>
          <input type="text" value={ring} onChange={(e) => {setCompany(e.target.value)}} />
          <label htmlFor="" className="flex mt-4">type</label>
          <input type="text" value={type} onChange={(e) => {setCompany(e.target.value)}} />
        </form>
        <form action="" className="w-full h-70 space-x-20" onSubmit={(e) => {e.preventDefault()}}>
          <br />
          <label htmlFor="" className="flex mt-4">stock</label>
          <input type="text" value={stock} onChange={(e) => {setCompany(e.target.value)}} />
          <label htmlFor="" className="flex mt-4">made in</label>
          <input type="text" value={madein} onChange={(e) => {setCompany(e.target.value)}}/>
          <label htmlFor="" className="flex mt-4">color</label>
          <input type="text" value={color} onChange={(e) => {setCompany(e.target.value)}}/>
          <label htmlFor="" className="flex mt-4">price</label>
          <input type="text" value={price} onChange={(e) => {setCompany(e.target.value)}}/>
        </form>
        <div className="md:fixed md:flex justify-end items-baseline top-[80%] right-[31%]">
            <button type="submit" className="mt-4 bg-slate-600 text-red-300 py-2 px-6 rounded-md hover:bg-slate-400">Submit</button>
        </div>
      </div>
      <CFooter/>
    </div> 
    </>
  );
};

export default Index