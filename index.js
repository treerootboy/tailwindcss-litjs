// Import stylesheets
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './component';

export class App extends LitElement {
  render() {
    return html`
    <h1>WebComponent</h1>
`;
  }
}

customElements.define('app-v1', App);
