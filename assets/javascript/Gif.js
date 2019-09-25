class GifObj {
  constructor(id, active, still_url, playing_url, clas) {
    this.id = id;
    this.tag = $("<img>");
    this.active = active;
    this.still_url = still_url;
    this.playing_url = playing_url;
    this.class = clas;
  }
  update_url() {
    if (this.active) this.tag.attr("src", this.playing_url);
    else if (!this.active) this.tag.attr("src", this.still_url);
    else console.log("An object has an invalid active property: " + this);
  }
  switch_url() {
    if (this.active) this.active = false;
    else if (!this.active) this.active = true;
    this.update_url();
  }
}
