// Copyright 2021 TANIGUCHI Masaya. All rights reserved.
// This work is licensed under the MIT License. https://git.io/mit-license

import onp from "https://esm.sh/onp@2";
import { Candidate } from "https://lib.deno.dev/x/ddc_vim@v0/types.ts";
import {
  BaseFilter,
  FilterArguments,
} from "https://lib.deno.dev/x/ddc_vim@v0/base/filter.ts";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: FilterArguments<Params>): Promise<Candidate[]> {
    const matches = new Map<Candidate, number>(
      args.candidates.map((candidate) => [
        candidate,
        onp.diffText(args.completeStr, candidate.word).distance
      ])
    )
    return Promise.resolve(args.candidates.sort((a, b) => {
      return (matches.get(a) ?? 0) - (matches.get(b) ?? 0)
    }));
  }
  override params(): Params {
    return {};
  }
}
