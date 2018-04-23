import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';
import "../styles/docs.scss";
import {
  Link
} from 'react-router-dom';

class ECPair extends Component {
  componentDidMount() {
    document.title = "ECPair - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="ECPair">
        <h2 id='ECPair' className="content-head is-center"><i className="fas fa-key" /> ECPair</h2>
        <div className="pure-menu pure-menu-horizontal breadcrumb">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/bitcoincash">bitbox-cli</Link></li>
            <li className="pure-menu-item"> > </li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="/bitboxcli/ECPair">ECPair</Link></li>
          </ul>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h3 id='fromWIF'><code>fromWIF</code></h3>
            <p>
            Generates an ECPair from a private key in wallet import format.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          wif <code>string</code>:                private key in wallet import format (WIF)
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          ecpair <code>string</code>:      ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // mainnet WIF
  let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
  BITBOX.ECPair.fromWIF(wif);

  // testnet WIF
  let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW'
  BITBOX.ECPair.fromWIF(wif)
            `}</SyntaxHighlighter>

            <h3 id='toWIF'><code>toWIF</code></h3>
            <p>
            Gets a private key in wallet import format from an ECPair.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>ECPair</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          wif <code>string</code>:      private key in wallet import format
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // mainnet wif
  let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // wif from ecpair
  BITBOX.ECPair.toWIF(ecpair);
  // L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1

  // testnet wif
  let wif = 'cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // wif from ecpair
  BITBOX.ECPair.toWIF(ecpair);
  // cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA
            `}</SyntaxHighlighter>

            <h3 id='fromPublicKey'><code>fromPublicKey</code></h3>
            <p>
            Generates an ECPair from a public key buffer.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          buffer <code>Buffer</code>:                 public key buffer
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          ecpair <code>ECPair</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // create ECPair from mainnet pubkeyBuffer
  let pubkeyBuffer = Buffer.from("02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
  BITBOX.ECPair.fromPublicKey(pubkeyBuffer);

  // create ECPair from testnet pubkeyBuffer
  let pubkeyBuffer = Buffer.from("024a6d0737a23c472d078d78c1cbc3c2bbf8767b48e72684ff03a911b463da7fa6", 'hex');
  BITBOX.ECPair.fromPublicKey(pubkeyBuffer);
            `}</SyntaxHighlighter>

            <h3 id='toPublicKey'><code>toPublicKey</code></h3>
            <p>
            Get the public key of an ECPair as a buffer.
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>ECPair</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
          buffer <code>Buffer</code>:       public key of an ECPair as a buffer
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // create ecpair from mainnet public key buffer
  let ecpair = BITBOX.ECPair.fromPublicKey(Buffer.from('02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b', 'hex'));
  // create public key buffer
  BITBOX.ECPair.toPublicKey(ecpair);
  // <Buffer 02 d3 05 77 2e 08 73 fb a6 c1 c7 ff 35 3c e3 74 23 33 16 eb 58 20 ac d7 ff 3d 7d 9b 82 d5 14 12 6b>

  // create ecpair from testnet public key buffer
  let ecpair = BITBOX.ECPair.fromPublicKey(Buffer.from('024a6d0737a23c472d078d78c1cbc3c2bbf8767b48e72684ff03a911b463da7fa6', 'hex'));
  // create public key buffer
  BITBOX.ECPair.toPublicKey(ecpair);
  // <Buffer 02 4a 6d 07 37 a2 3c 47 2d 07 8d 78 c1 cb c3 c2 bb f8 76 7b 48 e7 26 84 ff 03 a9 11 b4 63 da 7f a6>
            `}</SyntaxHighlighter>

            <h3 id='toLegacyAddress'><code>toLegacyAddress</code></h3>
            <p>
          Get legacy address of ECPair
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>ECPair</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            legacyAddress <code>string</code>:     legacy base58check encoded address of an ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // mainnet wif
  let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // to legacy address
  BITBOX.ECPair.toLegacyAddress(ecpair);
  // 1DgxdA5bbMcCNWg3yB2MgKqFazV92BXgxK

  // testnet wif
  let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // to legacy address
  BITBOX.ECPair.toLegacyAddress(ecpair);
  // mg4PygFcXoyNJGJkM2Dcpe25av9wXzz1My
            `}</SyntaxHighlighter>

            <h3 id='toCashAddress'><code>toCashAddress</code></h3>
            <p>
          Get cash address of ECPair
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>ECPair</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            cashAddress <code>string</code>:     cashaddr encoded address of an ECPair
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // mainnet wif
  let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // to legacy address
  BITBOX.ECPair.toCashAddress(ecpair);
  // bitcoincash:qz9nq206kteyv2t7trhdr4vzzkej60kqtytn7sxkxm

  // testnet wif
  let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // to legacy address
  BITBOX.ECPair.toCashAddress(ecpair);
  // bchtest:qqzly4vrcxcjw62u4yq4nv86ltk2mc9v0yvq8mvj6m
            `}</SyntaxHighlighter>

            <h3 id='sign'><code>sign</code></h3>
            <p>
          Sign 32 byte hash encoded as a buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>ECPair</code>
              </li>
              <li>
          buffer <code>Buffer</code>: 32 byte Buffer
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            signature <code>Object</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // mainnet wif
  let wif = 'Kxq2EzVbDwjquUt5zyCFED5FRt99RZKEKVDJWTQcpSDoLAWMqLer';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // 32 byte buffer
  let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
  // sign
  BITBOX.ECPair.sign(ecpair, buf);

  // testnet wif
  let wif = 'cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA';
  // ecpair from wif
  let ecpair = BITBOX.ECPair.fromWIF(wif);
  // 32 byte buffer
  let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
  // sign
  BITBOX.ECPair.sign(ecpair, buf);
            `}</SyntaxHighlighter>

            <h3 id='verify'><code>verify</code></h3>
            <p>
          Verify signed 32 byte hash encoded as a buffer
            </p>
            <h4>Arguments</h4>
            <ol>
              <li>
          ecpair <code>ECPair</code>
              </li>
              <li>
          buffer <code>Buffer</code>: 32 byte Buffer
              </li>
              <li>
          signature <code>Object</code>
              </li>
            </ol>
            <h4>Result</h4>
            <p>
            verified <code>Boolean</code>
            </p>
            <h4>Examples</h4>
            <SyntaxHighlighter language='javascript' style={ocean}>{`
  // mainnet wifs
  let wif1 = 'Kxq2EzVbDwjquUt5zyCFED5FRt99RZKEKVDJWTQcpSDoLAWMqLer';
  let wif2 = 'L4BwXDmjzEyzKHbAfGruhieUDPs8KTx7DMgqPk4aF9GefzgqPENV';
  // ecpairs from wifs
  let ecpair1 = BITBOX.ECPair.fromWIF(wif1);
  let ecpair2 = BITBOX.ECPair.fromWIF(wif2);
  // 32 byte buffer
  let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
  // sign
  let signature = BITBOX.ECPair.sign(ecpair1, buf);
  // verify
  BITBOX.ECPair.verify(ecpair1, buf, signature);
  // true
  BITBOX.ECPair.verify(ecpair2, buf, signature);
  // false

  // testnet wifs
  let wif1 = 'cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA';
  let wif2 = 'cRaFawZ49jEV2X3byAV4iGBYCRBVU8PoBzUMVToeEbFeVzbH4Gi7';
  // ecpairs from wifs
  let ecpair1 = BITBOX.ECPair.fromWIF(wif1);
  let ecpair2 = BITBOX.ECPair.fromWIF(wif2);
  // 32 byte buffer
  let buf = Buffer.from(BITBOX.Crypto.sha256('EARTH'), 'hex');
  // sign
  let signature = BITBOX.ECPair.sign(ecpair1, buf);
  // verify
  BITBOX.ECPair.verify(ecpair1, buf, signature);
  // true
  BITBOX.ECPair.verify(ecpair2, buf, signature);
  // false
            `}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default ECPair;