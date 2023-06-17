import React from "react";
import Link from "next/link";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
    subsets:["latin"],
    weight:['400']
})

export default function Thank(){
    return(
        <div className="pt-20">
        <section className={poppins.className}>
            <h1 className="text-5xl font-bold text-orange-600">Thank you! I'll get back to you soon 😊</h1>
        </section>
        </div>
    )
}