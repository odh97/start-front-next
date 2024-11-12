import { request } from "@/lib/axios";

export async function getPicsumImages() {
  const result = await request({
    url: "https://picsum.photos/200/300?random=1",
    method: "GET",
    responseType: "blob",
  });

  const imageBlob = result.data;
  const imageObjectURL = URL.createObjectURL(imageBlob);

  return imageObjectURL;
}

export async function getMyServer() {
  return request({
    url: "https://picsum.photos/200/300?random=1",
    method: "GET",
    params: {},
  });
}

export async function postMyServer() {
  return request({
    url: "https://picsum.photos/200/300?random=1",
    method: "POST",
    data: {},
  });
}
