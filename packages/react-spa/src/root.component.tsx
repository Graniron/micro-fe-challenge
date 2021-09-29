import { MyComponent } from 'ui-library-react';

export default function Root(props) {
  return <section>
    {props.name} is mounted!

    <div>
      <MyComponent first="Roman" last="Yavoriv" />
    </div>
  </section>;
}
