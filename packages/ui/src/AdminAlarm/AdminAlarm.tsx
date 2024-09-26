"use client";

import React from "react";
import { Button } from "../Button/Button"; 
import { Heading } from "../Heading/Heading";
import { LucideIcon } from "../LucideIcon/LucideIcon";
import { Input } from "../Input/Input";
import "./style.css";

export const Alarm = (): JSX.Element => {
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="overlap">
        <div className="form"> 
          <img className="focusalarm" alt="Focusalarm" src='/focusalarm-1.png'/>
          <div className="text-w"><Heading heading="h2" text="ADMINISTRACIÓN DE ALERTAS" /></div>
          </div>
          
          <Heading heading="h2" />
          <LucideIcon />
          <LucideIcon />
          <div className="instance">
            <Button active shape="default" size="large" state="default" type="plain" destination="/index" buttonText="Salir" />
          </div>
        </div>
        <div className="overlap-group">
          <div className="form-2">
            <div className="text-wrapper">{""}</div>
          </div>
          <div className="button-wrapper">
            <Button active shape="default" size="large" state="default" type="plain" destination="/admin" buttonText="Regresar" />
          </div>
          <div className="textinput-stack" />
          <div className="inputgroup-large">
            <Input className="input-instance" size="large" state="default" status="default" text="Almuerzo Trabajo"  />
          </div>
          <div className="inputgroup-large-2">
            <Input
              className="design-component-instance-node"
              size="large"
              state="default"
              status="default"
              text="Quiz Calculo"
            />
          </div>
          <div className="inputgroup-large-3">
            <Input
              className="design-component-instance-node"
              size="large"
              state="default"
              status="default"
              text="Reunión daily"
            />
          </div>
          <div className="textinput-stack-2" />
          <div className="inputgroup-large-4">
            <Input className="input-2" size="large" state="default" status="default" text="Estudio" />
          </div>
          <div className="inputgroup-large-5">
            <Input className="input-instance" size="large" state="default" status="default" text="Ejercicio" />
          </div>
          <div className="inputgroup-large-6">
            <Input className="input-3" size="large" state="default" status="default" text="Trabajo" />
          </div>
        </div>
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        <LucideIcon />
        
      </div>
    </div>
  );
};
