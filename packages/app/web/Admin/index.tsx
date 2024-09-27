import React from 'react';
import { WebButton as Button, WebHeading as Heading } from '@my/ui';

import './style_admin.css';

export const AdminPage = (): JSX.Element => {
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="overlap">
          <div className="form">
            <div className="text-wrapper"></div>
          </div>
          <div className="instance">
            <Button
              active
              shape="default"
              size="large"
              state="default"
              type="plain"
              buttonText="Perfil"
            />
          </div>
          <div className="button-wrapper">
            <Button
              active
              shape="default"
              size="large"
              state="default"
              type="plain"
              buttonText="Temas"
            />
          </div>
          <div className="instance-2">
            <Button
              active
              shape="default"
              size="large"
              state="default"
              type="plain"
              buttonText="Opciones"
            />
          </div>
          <div className="instance-3">
            <Button
              active
              shape="default"
              size="large"
              state="default"
              type="plain"
              buttonText="Sincronizar Dispositivos"
            />
          </div>
          <div className="instance-4">
            <Button
              active
              shape="default"
              size="large"
              state="default"
              type="plain"
              buttonText="Alertas"
              destination="/admin/alarm"
            />
          </div>
          <div className="instance-5">
            <Button
              active
              shape="default"
              size="large"
              state="default"
              type="plain"
              buttonText="Bienestar"
              destination="/admin/wellness"
            />
          </div>
        </div>
        <div className="overlap-group">
          <div className="form-2">
            <img className="focusalarm" alt="Focusalarm" src="/focusalarm-1.png" />
            <div className="text-w">
              <Heading heading="h2" text="ADMINISTRACIÓN" />
            </div>
          </div>
          <div className="instance-6">
            <Button
              active
              shape="default"
              size="large"
              state="default"
              type="plain"
              buttonText="Salir"
              destination="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
