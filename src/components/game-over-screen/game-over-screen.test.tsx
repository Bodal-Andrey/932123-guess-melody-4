import * as React from "react";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";
import GameOverScreen from "./game-over-screen";
import history from "../../history";
import {noop} from "../../utils";

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
  .create(
      <Router
        history={history}
      >
        <GameOverScreen
          onReplayButtonClick={noop}
        />
      </Router>
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
