// Import stylesheets
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import './component';

@customElement('App')
export class App extends LitElement {
  render() {
    return html`
    <h1>WebComponent</h1>
`;
  }
}
