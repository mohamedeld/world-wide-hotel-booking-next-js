"use server";
import { notFound } from "next/navigation";
import Cabins from "../_modules/cabings";
import connectToDB from "./connectToDb";

export const getCabins = async ()=>{
  try{
    connectToDB();
    const cabins = await Cabins.find({});
    return cabins;
  }catch(error){
    console.log(error);
  }
}

export const getCabinById = async (id)=>{
  try{
    connectToDB();
    const cabin = await Cabins.findById(id);
    if(!cabin){
      notFound();
      return new Error("can not find cabin with this id");
    }
    return cabin
  }catch(error){
    notFound();
    console.log(error);
  }
}

export const createCabin = async (data)=>{
  try{
    connectToDB();
    await Cabins.create({
      name:data?.name || "",
      maxCapacity:data?.maxCapacity || 0,
      regularPrice:data?.regularPrice || 0,
      discount:data?.discount || 0,
      description:data?.description || "",
      image:data?.image || ""
    });
  }catch(error){
    console.log(error);
    notFound();
  }
}

export const updateCabin = async (id,data)=>{
  try{
    connectToDB();
    const updatedData = {
      name:data?.name || "",
      maxCapacity:data?.maxCapacity || 0,
      regularPrice:data?.regularPrice || 0,
      discount:data?.discount || 0,
      description:data?.description || "",
      image:data?.image || ""
    }
    const updatedCabin = await Cabins.findByIdAndUpdate(id,updatedData,{
      new:true
    });
    if(!updatedCabin){
      notFound();
      return new Error("can not find cabin with this id");
    }
    return updatedCabin
  }catch(error){
    console.log(error);
    notFound();
  }
}

export const deleteCabin = async (id)=>{
  try{
    connectToDB();
    const cabin = await Cabins.findByIdAndDelete(id);
    if(!cabin){
      return new Error("can not find cabin with this id");
      notFound();
    }
    return cabin
  }catch(error){
    notFound();
    console.log(error);
  }
}