{ pkgs ? import <nixpkgs> { } }:
let
  easy-ps = import
    (pkgs.fetchFromGitHub {
      owner = "justinwoo";
      repo = "easy-purescript-nix";
      rev = "11d3bd58ce6e32703bf69cec04dc7c38eabe14ba";
      sha256 = "tESal32bcqqdZO+aKnBzc1GoL2mtnaDtj2y7ociCRGA=";
    }) {
    inherit pkgs;
  };
in
pkgs.mkShell {
  buildInputs = [
    easy-ps.purs-0_15_7
    easy-ps.psc-package
    pkgs.pulp
    pkgs.spago
    pkgs.yarn
  ];
}