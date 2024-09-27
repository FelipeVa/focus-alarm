import React from 'react';
import {
  WebButton as Button,
  WebCheckbox as Checkbox,
  WebHeading as Heading,
  WebInput as Input,
} from '@my/ui';
import './style_well.css';

export const AdminWellnessPage = (): JSX.Element => {
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="overlap">
        <img className="focusalarm" alt="Focusalarm" src="/focusalarm-1.png" />
          <div className="form">
            <div className="text-w">
              <Heading heading="h2" text="ADMINISTRACIÓN DE ALERTAS" />
            </div>
          </div>
          <div className="instance">
            <Button active shape="default" size="large" state="default" type="plain" buttonText='Salir' destination='/' />
          </div>
        </div>
        <div className="overlap-group">

          <div className="button-wrapper">
            <Button active shape="default" size="large" state="default" type="plain" buttonText='Regresar' destination='/admin' />
          </div>
          <div className="textinput-stack" />
          <Checkbox className="checkbox-instance" size="default" state="hover" status="inactive" />
          <div className="inputgroup-large">
            <Input size="large" state="default" status="default" text="Url rutina de trabajo" />
          </div>
          <div className="inputgroup-large-2">
            <Input size="large" state="default" status="default" text="url nuevo video" />
          </div>
          <div className="inputgroup-large-3">
            <Input size="large" state="default" status="default" text="Url lista reproducción " />
          </div>
          <Checkbox
            className="design-component-instance-node"
            size="default"
            state="hover"
            status="indeterminate"
          />
          <div className="button-wrapper">
            <Button active shape="default" size="large" state="default" type="plain" buttonText='Regresar' destination='/admin' />
          </div>
          <Checkbox className="checkbox-2" size="default" state="hover" status="indeterminate" />
          <Checkbox
            className="checkbox-3"
            size="default"
            state="hover"
            status="indeterminate"
            text="Video Personalizado"
          />
          <div className="instance-2">
            <Button active shape="default" size="large" state="default" type="plain" buttonText='Cargar' destination='#'  />
          </div><div className="instance-3">
            <Button active shape="default" size="large" state="default" type="plain" buttonText='Cargar' destination='#'  />
          </div>
        </div>
      </div>
    </div>
  );
};
