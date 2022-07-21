export default class CustomService {

  _apiBase = 'http://164.92.190.147:8003/api'
 
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllCaps = async () => {
    const res = await this.getResource(`/caps/`);
    return res.results
  };

  getCap = async (id) => {
    const cap = await this.getResource(`/caps/${id}/`);
    return this._transformCap(cap);
  };

  _transformCap = (cap) => {
    return {
      id: this._extractId(cap),
      name: cap.name,
      price: cap.price,
      description: cap.description
    }
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

}

