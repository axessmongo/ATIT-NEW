import React from 'react'
import { Link } from 'react-router-dom'
const BlogShare = () => {
  return (
    <div>
        <div class="share border py-3 border-start-0 border-end-0 border-success">
    <div class="container">
        <div class="d-flex justify-content-between align-items-center text-dark">
            <h1 class="primary-color fs-3 m-0 text-dark pe-5">Share This Post</h1>
            <div>
                <Link to="#" id="whatsapp-share" data-action="share/whatsapp/share" target="_blank"
                    class="share-ico text-decoration-none mx-2 fs-4 text-success">
                    <i class="bi bi-whatsapp"></i>
                </Link>
                <Link to="#" id="instagram-share" data-action="share/instagram/share" target="_blank"
                    class="share-ico text-decoration-none mx-2 fs-4 text-danger">
                    <i class="bi bi-instagram"></i>
                </Link>
                <Link to="#" id="facebook-share" data-action="share/facebook/share" target="_blank"
                    class="share-ico text-decoration-none mx-2 fs-4">
                    <i class="bi bi-facebook"></i>
                </Link>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default BlogShare