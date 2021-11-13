FROM rust:latest AS build

COPY doot /doot
WORKDIR /doot
RUN cargo build --release

FROM debian:bullseye-slim
RUN apt-get update && apt-get install -y libpq5
COPY --from=build /doot/target/release/doot /usr/local/bin/doot

CMD ["/usr/local/bin/doot"]
