'use client';

import React from 'react';
import {
  WebButton as Button,
  WebHeading as Heading,
  WebLabel as Label,
  WebTextArea as TextArea,
} from '@my/ui';
import './style.css';

export const HomePage = (): JSX.Element => {
  return (
    <div className="macbook-air">
      <div className="div-2">
        <div className="overlap-group">
          <div className="form"></div>
          <div className="instance">
            <Button
              active
              className="button-instance"
              shape="default"
              size="large"
              state="default"
              type="plain"
              destination="/admin"
              buttonText="Ingresar"
            />
          </div>
          <TextArea className="text-area-instance" size="small" state="default" status="default" />
          <TextArea className="text-area-instance" size="small" state="default" status="default" />
          <TextArea
            className="design-component-instance-node"
            size="small"
            state="default"
            status="default"
          />
          <Label className="label-instance" size="label-large" />
          <Label className="label-2" size="label-large" text="Contraseña" />
          <Label className="label-2" size="label-large" text="Contraseña" />
        </div>

        <div className="overlap">
          <img className="focusalarm" alt="Focusalarm" src="/focusalarm-1.png" />

          <div className="text-wrapper-3">
            <Heading className="heading-instance" heading="h2" text="Focus Alarm" />
          </div>
        </div>
      </div>
    </div>
  );
};
