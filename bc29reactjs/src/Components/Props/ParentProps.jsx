import React, { Component } from "react";
import ChildProps from "./ChildProps";

export default class ParentProps extends Component {
  imageUrl1 =
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/e/v/evt-_main_poster-_facebook_1__2.jpg";
  imageUrl2 =
    "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_jurassic_world_dominion_-10062022_2.jpg";

  movie1 = {
    name: "Em và Trịnh",
    imageUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/e/v/evt-_main_poster-_facebook_1__2.jpg",
  };

  movie2 = {
    name: "Thế giới khủng long",
    imageUrl:
      "https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_jurassic_world_dominion_-10062022_2.jpg",
  };

  showName = (name) => {
    alert(name);
  };

  render() {
    return (
      <div>
        <h4>Props</h4>
        <div className="row w-75 mx-auto">
          <div className="col-4">
            <ChildProps showName={this.showName} movie={this.movie1} />
          </div>
          <div className="col-4">
            <ChildProps showName={this.showName} movie={this.movie2} />
          </div>
          <div className="col-4">
            <ChildProps showName={this.showName} movie={this.movie2} />
          </div>
        </div>
      </div>
    );
  }
}
