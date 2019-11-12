import React from "react";
import { connect } from "react-redux";
import { Spinner } from "@chakra-ui/core";
import { fetchEntries } from "./EntriesSlice";
import EntriesPage from "../Components/EntriesPage";
import { store } from "../App";

class EntriesPageContainer extends React.Component {
  componentDidMount() {
    if (!this.props.entries.meta) {
      store.dispatch(fetchEntries());
    }
  }

  onClickNext() {
    store.dispatch(fetchEntries(this.props.entries.links.next));
  }
  onClickPrev() {
    store.dispatch(fetchEntries(this.props.entries.links.prev));
  }
  render() {
    if (this.props.error) {
      return (
        <div>Ups... It seems there's an error loading the Entries data.</div>
      );
    }
    if (!this.props.entries.meta) {
      return <Spinner />;
    }
    return (
      <div>
        <EntriesPage
          onClickNext={this.onClickNext}
          onClickPrev={this.onClickPrev}
          entries={this.props.entries}
        />
      </div>
    );
  }
}

const mapState = ({ entries }) => {
  return {
    entries: entries.entries
  };
};

export default connect(mapState)(EntriesPageContainer);
