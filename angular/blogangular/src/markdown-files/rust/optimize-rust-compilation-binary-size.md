## optimize-rust-compilation-binary-size

## 1.install cargo-bloat

```rust
cargo install cargo-bloat
yay -S strip
yay -S upx
```

## 2.Cargo.toml add profile.release

```rust
[profile.release]
opt-level = 'z'
lto = true
codegen-units = 1
panic = 'abort'
```

## 3.run release.sh

```rust
cargo bloat --release --crates
cargo build --release
strip -s target/release/codewar
upx -9 target/release/codewar
```

