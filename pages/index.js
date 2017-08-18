import React from "react";
import Head from "next/head";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Learn Nextjs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0,width=device-width"
          />
        </Head>
        <div className="columns">
          <div className="column">
            <h1>Home Page</h1>
            <p>Fuck you</p>
          </div>
        </div>
      </div>
    );
  }
}
