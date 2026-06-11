"use client";
import { useEffect, useRef } from "react";
import { LinguistViewModel } from "./LinguistViewModel";
import { useObservableState } from "observable-hooks";
import { LinguistListView } from "./LinguistListView";

export function LinguistScreen() {
  const viewModel = useRef(new LinguistViewModel()).current;
  const input = useRef(new LinguistViewModel.Input()).current;
  const output = useRef(viewModel.transform(input)).current;
  const linguistList = useObservableState(output.linguistListObservable, []);

  useEffect(() => {
    input.loadTrigger.next();
  }, []);

  return (
    <div>
      <LinguistListView linguistList={linguistList} />
    </div>
  );
}
