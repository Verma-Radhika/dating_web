import React from "react";
import "./frndRequest.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
export const FrndRequest = () => {
  return (
    <div class="container bootstrap snippets bootdey mt-3">
      <div class="jumbotron list-content">
        <ul class="list-group">
          <li href="#" class="list-group-item title">
            Your friend Request
          </li>
          <li href="#" class="list-group-item text-left">
            <img
              class="img-thumbnail"
              src="https://bootdey.com/img/Content/User_for_snippets.png"
            />
            <label class="name">
              Juan guillermo cuadrado
              <br />
            </label>
            <label class="pull-right">
              <a class="btn btn-success btn-xs glyphicon glyphicon-ok">
                <CheckIcon />
              </a>
              <a
                class="btn btn-danger  btn-sm glyphicon glyphicon-trash"
                href="#"
                title="Delete"
              >
                <ClearIcon />
              </a>
              <a
                class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
                href="#"
                title="Send message"
              ></a>
            </label>
            <div class="break"></div>
          </li>
          <li href="#" class="list-group-item text-left">
            <img
              class="img-thumbnail"
              src="https://bootdey.com/img/Content/user_1.jpg"
            />
            <label class="name">James Rodriguez (10)</label>
            <label class="pull-right">
              <a class="btn btn-success btn-xs glyphicon glyphicon-ok">
                <CheckIcon />
              </a>
              <a
                class="btn btn-danger  btn-xs glyphicon glyphicon-trash"
                href="#"
                title="Delete"
              >
                <ClearIcon />
              </a>
              <a
                class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
                href="#"
                title="Send message"
              ></a>
            </label>
            <div class="break"></div>
          </li>
          <li href="#" class="list-group-item text-left">
            <img
              class="img-thumbnail"
              src="https://bootdey.com/img/Content/user_2.jpg"
            />
            <label class="name">Mariana pajon</label>
            <label class="pull-right">
              <a class="btn btn-success btn-xs glyphicon glyphicon-ok">
                <CheckIcon />
              </a>
              <a
                class="btn btn-danger  btn-xs glyphicon glyphicon-trash"
                href="#"
                title="Delete"
              >
                <ClearIcon />
              </a>
              <a
                class="btn btn-info  btn-xs glyphicon glyphicon glyphicon-comment"
                href="#"
                title="Send message"
              ></a>
            </label>
            <div class="break"></div>
          </li>
          <li href="#" class="list-group-item text-left">
            <a class="btn btn-block btn-primary">
              <i class="glyphicon glyphicon-refresh"></i>
              Load more...
            </a>
          </li>
        </ul>
      </div>
    </div>
    // The diagram below depicts the number of times Maria broke her best and worst records throughout the season:
    // const value = [3 4 21 36 10 28 35 5 24 42];
    // She broke her best record four times (after games 1 ,2 ,3 , 9 ) and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we print 4 0 as our answer.
  );
};

// 0 - 3 3
// 1 - 3 4
// 2-  3 21
// 2-  3 36
// 3-  3 36
// 4-  3 36
// 5-  3 36
// 6-  3 36
// 7-  3 36
// 8-  3 42

//  find max and min value only get ans index for both [min, max]
// let min =0;
// let max= -1;

// for(let i=0;i<score.length; i++){
// if(score[i]>min){
// min = score[i]
// }
// }
